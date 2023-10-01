import logo from './logo.svg';
import './App.css';
import StateHook from './hooks_components/StateHook';
import UseEffectHook from './hooks_components/UseEffectHook';
import UseContextHook from './hooks_components/UseContextHook';
import UseReducerHook from './hooks_components/UseReducerHook';
import UseMemoHook from './hooks_components/UseMemoHook';
import UseCallBackHook from './hooks_components/UseCallBackHook';
import UseRefHook from './hooks_components/UseRefHook';
import UseImperativeHook from './hooks_components/UseImperativeHook';
import UseLayoutEffectHook from './hooks_components/UseLayoutEffectHook';
import UseLoggerHook from './hooks_components/UseLoggerHook';
import UseDebugValueHook from './hooks_components/UseDebugValueHook';
import UseLocalStorageHook from './hooks_components/UseLocalStorageHook';

function App() {
  return (
    <div className="App">
      <StateHook />
      {/* <UseEffectHook />
      <UseContextHook />
      <UseReducerHook />
      <UseMemoHook />
      <UseCallBackHook />
      <UseRefHook />
      <UseImperativeHook />
      <UseLayoutEffectHook />
      <UseLoggerHook />
      <UseDebugValueHook />
      <UseLocalStorageHook /> */}
    </div>
  );
}

export default App;
