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

    public function updateEmail(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = User::first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Wrong password'
            ], 401);
        }

        $user->email = $fields['email'];
        $user->update();

        return response([
            'message' => 'Email updated successfully'
        ], 200);
    }

    public function updatePassword(Request $request)
    {
        $fields = $request->validate([
            'password' => 'required|string',
            'new_password' => 'required|string|confirmed',
        ]);

        $user = User::first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Wrong password'
            ], 401);
        }

        $user->password =  bcrypt($fields['new_password']);
        $user->update();

        return response([
            'message' => 'Password updated successfully'
        ], 200);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
