<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function createAdmin()
    {

        $users = User::get();

        if ($users->count() <= 0) {
            $user = User::create([
                'name' => 'admin',
                'email' => 'admin@lungstest.com',
                'password' => bcrypt('admin@1122')
            ]);

            $token =  $user->createToken('apptoken')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201);
        } else {
            return response('Admin already exist', 403);
        }
    }

    public function login(Request $request)
    {

        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad credentials'
            ], 401);
        }


        $token =  $user->createToken('apptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    public function logout(Request $response)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
