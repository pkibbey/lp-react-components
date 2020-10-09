Default select field:

```js
<SelectField
  value=""
  options={[
    { label: 'test 1', value: 'test1' },
    { label: 'test 2', value: 'test2' }
  ]}
/>
```

Errored select field:

```js
<SelectField
  value=""
  options={[
    { label: 'test 1', value: 'test1' },
    { label: 'test 2', value: 'test2' }
  ]}
  error={{
    isError: true,
    hasInteracted: true,
    message: 'invalid option'
  }}
/>
```
