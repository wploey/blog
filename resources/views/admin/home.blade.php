@extends('layouts.default')

@section('content')
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <div class="login-panel panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Please Sign In</h3>
            </div>
            <div class="panel-body">
                @include('shared.errors')
                <form role="form" method="POST" action="{{ url('/auth/login') }}">
                    {!! csrf_field() !!}
                    <fieldset>
                        <div class="form-group">
                            <input class="form-control" placeholder="E-mail" name="email" type="email" value="{{ old('email') }}" autofocus>
                        </div>
                        <div class="form-group">
                            <input id="password" class="form-control" placeholder="Password" name="password" type="password" value="" >
                        </div>
                        <div class="checkbox">
                            <label>
                                <input name="remember" type="checkbox">记住我
                            </label>
                            <label><a href="{{ route('signup') }}">注册</a></label>   
                        </div>
                        <!-- Change this to a button or input when using this as a form -->
                        <button class="btn btn-lg btn-success btn-block" type="submit">登录</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
@stop
@section('script')
<!-- script -->
@stop
