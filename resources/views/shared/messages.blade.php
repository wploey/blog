@foreach (['danger', 'warning', 'success', 'info'] as $msg)
  @if(session()->has($msg))
    {{ session()->get($msg) }}
  @endif
@endforeach