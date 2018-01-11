import * as React from 'react';
import { Slide, Text } from 'spectacle';

export class TitleSlide extends React.Component<{}> {
    public render() {
        return (
            <Slide>
                <Text>Quick Talking: TypeScript</Text>
                <Text>Why you might want to type check</Text>
            </Slide>
        );
    }
}