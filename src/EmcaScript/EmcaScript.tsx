import * as React from 'react';
import { Slide, CodePane, Text } from 'spectacle';

export class EmcaScript extends React.Component<{}> {
    public render() {
        return (
            <Slide>
                <Text>Well It Works</Text>
                <CodePane source={sampleCode}/>
            </Slide>
        );
    }
}

const sampleCode: string = `const Button = ({ title }) => (<button type="button">{ title }</button>);
    render(<Button title="My Button" />);`;
