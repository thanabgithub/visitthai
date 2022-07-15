import { Suspense, lazy } from "preact/compat";

const SomeComponent = lazy(() => import("./SomeComponent"));
// Pure Css
// https://www.udemy.com/course/css-friday/learn/lecture/22434294#overview

// Section 17: First 10 (Amazing) UI Design Projects

// 69.  # E02 Facebook Post And Youtube Video Like Loading

// Usage
<Suspense fallback={<div>loading...</div>}>
  <Foo>
    <SomeComponent />
  </Foo>
</Suspense>;
