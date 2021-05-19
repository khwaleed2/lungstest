<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Disclaimer;
use App\Models\DisCard;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Response;

class DisclaimerController extends Controller
{
    public function saveDisclaimers(Request $request)
    {

        $Disclaimer = new Disclaimer;

        if ($request->hasFile('file')) {
            $fields = $request->validate([
                'file' => 'image|mimes:svg',
                'text' => 'required|string'
            ]);

            $file_name = time() . '_' . $request->file->getClientOriginalName();
            $destinationPath = public_path('/icons');
            $fields['file']->move($destinationPath, $file_name);

            $Disclaimer->icon = '/icons/' . $file_name;
            $Disclaimer->text = $fields['text'];
            $Disclaimer->save();

            return response()->json(['success' => 'Disclaimer added']);
        } else {
            $fields = $request->validate([
                'text' => 'required|string'
            ]);

            $Disclaimer->text = $fields['text'];
            $Disclaimer->save();

            return response()->json(['success' => 'Disclaimer added']);
        }
    }

    public function saveDisCardText(Request $request)
    {

        $fields = $request->validate([
            'text' => 'required|string'
        ]);

        $cardText = DisCard::first();

        if ($cardText) {
            $cardText->text = $fields['text'];
            $cardText->update();
        } else {
            $Disclaimer = new DisCard;

            $Disclaimer->text = $fields['text'];
            $Disclaimer->save();
        }

        return response()->json(['success' => 'Disclaimer Card text added']);
    }

    public function getDisclaimers()
    {

        $Disclaimers = Disclaimer::get();
        $DisclaimerCardText = DisCard::first();

        return response([
            'disclaimers' => $Disclaimers,
            'DisclaimerCardText' => $DisclaimerCardText,
        ]);
    }

    public function deleteDisclaimers($id)
    {
        $disc = Disclaimer::where('id', $id)->first();

        $file_path = $disc->icon;

        if (file_exists($file_path)) {
            @unlink($file_path);
        }

        $disc->delete();
    }
}
