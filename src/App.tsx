import './App.css';

import '@codingame/monaco-vscode-python-default-extension';
import { UserConfig } from 'monaco-editor-wrapper';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';

const userConfig: UserConfig = {
  wrapperConfig: {
    editorAppConfig: {
      $type: 'extended',
      codeResources: {
        main: {
          text: 'print("Hello, World!")',
          uri: '/workspace/hello.py',
        },
      },
    },
  },
};

const App = () => {
  return (
    <div className="content">
      <MonacoEditorReactComp userConfig={userConfig} />
    </div>
  );
};

export default App;
