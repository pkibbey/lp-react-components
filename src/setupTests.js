// Jest test setup
import '@testing-library/jest-dom/extend-expect'
import { configure, act } from '@testing-library/react'

// speeds up *ByRole queries a bit
// https://github.com/testing-library/dom-testing-library/issues/552
configure({ defaultHidden: true })

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = 15000

// real times is a good default to start, individual tests can
// enable fake timers if they need, and if they have, then we should
// run all the pending timers (in `act` because this can trigger state updates)
// then we'll switch back to realTimers.
// it's important this comes last here because jest runs afterEach callbacks
// in reverse order and we want this to be run first so we get back to real timers
// before any other cleanup
afterEach(async () => {
  if (setTimeout._isMockFunction) {
    act(() => jest.runOnlyPendingTimers())
    jest.useRealTimers()
  }
})
