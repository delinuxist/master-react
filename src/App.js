import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import FocusInput from "./components/FocusInput";
import ForwardRefParentInput from "./components/ForwardRefParentInput";
import Greetings from "./components/Greetings";
import Hero from "./components/Hero";
import AddUserHook from "./components/hooks/AddUserHook";
import CounterCustomHook from "./components/hooks/CounterCustomHook";
import CounterHooks from "./components/hooks/CounterHooks";
import DataFetchingHooks from "./components/hooks/DataFetchingHooks";
import HookMouse from "./components/hooks/HookMouse";
import IntervalHook from "./components/hooks/IntervalHook";
import MouseContainerHook from "./components/hooks/MouseContainerHook";
import HoverCounter from "./components/HoverCounter";
import LifeCycle from "./components/LifeCycle";
import PortalDemo from "./components/PortalDemo";
import PostList from "./components/PostList";
import User from "./components/User";

function App() {
  return (
    <div>
      {/* <ClickCounter name={"Emmanuel"} />
      <HoverCounter />
      <User render={(isLoggedIn) => (isLoggedIn ? "Luke" : "Guest")} /> */}
      {/* <Greetings name="James" /> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <PostList /> */}
      {/* <LifeCycle /> */}
      {/* <FocusInput /> */}
      {/* <ForwardRefParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero hero={"Superman"} />
        <Hero hero="Batman" />
        <Hero hero={"Joker"} />
      </ErrorBoundary> */}
      {/* hooks */}
      {/* <CounterHooks /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainerHook /> */}
      {/* <DataFetchingHooks /> */}
      {/* <AddUserHook /> */}
      <CounterCustomHook />
    </div>
  );
}

export default App;
