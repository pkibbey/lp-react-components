Default select field:

```js
<SelectField
  value="test2"
  options={[
    { name: 'select an option', value: '', disabled: true },
    { name: 'test 1', value: 'test1' },
    { name: 'test 2', value: 'test2' }
  ]}
/>
```

Errored select field:

```js
<SelectField
  value=""
  options={[
    { name: 'select an option', value: '', disabled: true },
    { name: 'test 1', value: 'test1' },
    { name: 'test 2', value: 'test2' }
  ]}
  error={{
    isError: true,
    hasInteracted: true,
    message: 'invalid option'
  }}
/>
```
