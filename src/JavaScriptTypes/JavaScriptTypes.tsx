import * as React from 'react';
import { Heading, Slide, List, ListItem, Text, Code } from 'spectacle';

export const JavaScriptTypes: React.SFC<{}> = () => (
    <Slide>
        <Heading>What is type checking?</Heading>
        <Text>JavaScript and specific object types don't really get along. It recognizes the following out of the box:</Text>
        <List>
            <ListItem><Code>Boolean</Code></ListItem>
            <ListItem><Code>Null</Code></ListItem>
            <ListItem><Code>Number</Code></ListItem>
            <ListItem><Code>Object</Code></ListItem>
            <ListItem><Code>String</Code></ListItem>
            <ListItem><Code>Symbol</Code><sub>Starting with (ECMAScript 6)</sub></ListItem>
            <ListItem><Code>Undefined</Code></ListItem>
        </List>
    </Slide>
);