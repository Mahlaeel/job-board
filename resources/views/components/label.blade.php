<label class="mb-2 block text-sm font-medium text-slate900"
    for="{{ $for }}">
    {{ $slot }}
    @if ($required)
        <span class="text-red-600">*</span>
    @endif
</label>