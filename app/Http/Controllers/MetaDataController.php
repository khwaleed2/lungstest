<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MetaData;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Response;

class MetaDataController extends Controller
{

    public function getMeta()
    {
        $data = MetaData::first();

        return response([
            'metaData' => $data,
        ]);
    }

    public function saveOG(Request $request)
    {
        $fields = $request->validate([
            'title' => 'string',
            'url' => 'string',
            'desc' => 'string',
            'type' => 'string',
            'card' => 'string',
        ]);

        $metaData = MetaData::first();

        if ($metaData) {
            $metaData->title = $fields['title'];
            $metaData->url = $fields['url'];
            $metaData->description = $fields['desc'];
            $metaData->type = $fields['type'];
            $metaData->card = $fields['card'];

            if ($request->hasFile('file')) {
                $ffields = $request->validate([
                    'file' => 'image|mimes:png'
                ]);

                $file_name = time() . '_' . $request->file->getClientOriginalName();
                $destinationPath = public_path('/images');
                $ffields['file']->move($destinationPath, $file_name);

                $metaData->image = '/images/' . $file_name;
            }

            $metaData->update();
        } else {
            $MD = new MetaData;

            $MD->title = $fields['title'];
            $MD->url = $fields['url'];
            $MD->description = $fields['desc'];
            $MD->type = $fields['type'];
            $MD->card = $fields['card'];

            if ($request->hasFile('file')) {
                $ffields = $request->validate([
                    'file' => 'image|mimes:png'
                ]);

                $file_name = time() . '_' . $request->file->getClientOriginalName();
                $destinationPath = public_path('/images');
                $ffields['file']->move($destinationPath, $file_name);

                $MD->image = '/images/' . $file_name;
            }

            $MD->save();
        }
    }

    public function saveAnalytics(Request $request)
    {

        $fields = $request->validate([
            'analy' => 'string',
        ]);

        $metaData = MetaData::first();

        if ($metaData) {
            $metaData->analytics = $fields['analy'];
            $metaData->update();
        } else {
            $MD = new MetaData;

            $MD->analytics = $fields['analy'];
            $MD->save();
        }
    }
}
