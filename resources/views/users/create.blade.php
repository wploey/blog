@extends('layouts.default')
@section('title', '注册')
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">注册</h3>
                </div>
                <div class="panel-body">
                    @include('shared.errors')
                    <form role="form" method="POST" action="{{ route('users.store') }}">
                        {!! csrf_field() !!}
                        <fieldset>
                            <div class="form-group">
                                <input class="form-control" placeholder="name" name="name" type="text" value="{{ old('name') }}" autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="E-mail" name="email" type="email" value="{{ old('email') }}">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="password" type="password" value="{{ old('password') }}">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Confirm Password" name="password_confirmation" type="password" value="{{ old('password_confirmation') }}">
                            </div>
                            <!-- Change this to a button or input when using this as a form -->
                            <button class="btn btn-lg btn-success btn-block" type="submit">注册</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@stop
