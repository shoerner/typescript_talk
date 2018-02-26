import * as React from 'react';
import { Heading, Slide, Text } from 'spectacle';

export class TitleSlide extends React.Component<{}> {
    public render() {
        return (
            <Slide>
                <Heading>Lightning Talk: TypeScript</Heading>
                <Text>Why you might want to type check</Text>
            </Slide>
        );
    }
}