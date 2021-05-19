<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MetaData;

class PagesController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = MetaData::first();

        \Meta::set('title', $data->title);
        \Meta::set('url', $data->url);
        \Meta::set('description', $data->description);
        \Meta::set('type', $data->type);
        \Meta::set('twitter:card', $data->card);
        \Meta::set('image', asset($data->image));

        $analytics = $data->analytics;
        return view('app', ['analy' => $analytics]);
    }
}
