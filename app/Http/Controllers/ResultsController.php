<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Result;
use App\Models\ResultData;
use App\Models\SocialShare;
use Illuminate\Http\Response;


class ResultsController extends Controller
{
    public function getResults()
    {
        $Result = Result::get();
        $ResultData = ResultData::first();
        $ShareList = SocialShare::get();

        return response([
            'result' => $Result,
            'resultData' => $ResultData,
            'ShareList' => $ShareList,
        ]);
    }

    public function saveResults(Request $request)
    {
        $fields = $request->validate([
            'condition' => 'required|String',
            'seconds' => 'required|integer',
            'result' => 'required|String',
            'critical' => 'required|String'
        ]);

        $result = new Result;

        $result->conditions = $fields['condition'];
        $result->seconds = $fields['seconds'];
        $result->result = $fields['result'];
        $result->critical = $fields['critical'];
        $result->save();

        return response()->json(['success' => 'Result added']);
    }

    public function deleteResults($id)
    {
        $result = Result::where('id', $id)->first();

        $result->delete();

        return response()->json(['success' => 'Result Deleted']);
    }

    public function saveTimes(Request $request)
    {
        $fields = $request->validate([
            'inhale' => 'required|integer',
            'hold' => 'required|integer'
        ]);

        $resData = ResultData::first();

        if ($resData) {
            $resData->inhale_dura = $fields['inhale'];
            $resData->hold_dura = $fields['hold'];
            $resData->update();
        } else {
            $resultData = new ResultData;

            $resultData->inhale_dura = $fields['inhale'];
            $resultData->hold_dura = $fields['hold'];
            $resultData->card_text = 'Lorem ipsum, dolor sit. Assumenda cupiditate, consequatur blanditiis officia numquam veritatis minus ratione quidem aliquid doloremque!';
            $resultData->save();
        }

        return response()->json(['success' => 'Times added']);
    }

    public function saveCardText(Request $request)
    {
        $fields = $request->validate([
            'card_text' => 'required|String',
        ]);

        $resData = ResultData::first();

        if ($resData) {
            $resData->card_text = $fields['card_text'];
            $resData->update();
        } else {
            $resultData = new ResultData;

            $inhaleD = 1;
            $holdD = 30;

            $resultData->inhale_dura = $inhaleD;
            $resultData->hold_dura = $holdD;
            $resultData->card_text = $fields['card_text'];
            $resultData->save();
        }

        return response()->json(['success' => 'Card text added']);
    }
}
