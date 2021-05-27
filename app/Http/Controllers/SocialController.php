<?php

namespace App\Http\Controllers;

use App\Models\SocialShare;
use Illuminate\Http\Request;

class SocialController extends Controller
{
    public function getList()
    {
        $list = SocialShare::get();

        return response()->json(['list' => $list]);
    }

    public function addRemove(Request $request)
    {

        $social = SocialShare::where('name', $request->name)->first();

        if ($social) {
            $social->delete();

            $message = $request->name . ' has been removed';

            return response()->json(['success' => $message]);
        } else {
            $addSocial = new SocialShare;

            $addSocial->name = $request->name;
            $addSocial->icon = $request->icon;
            $addSocial->bColor = $request->bColor;
            $addSocial->save();

            $message = $request->name . ' has been added';

            return response()->json(['success' => $message]);
        }
    }
}
