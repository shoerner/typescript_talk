import * as React from 'react';
import { Appear, Heading, Slide, List, ListItem } from 'spectacle';

export const WhySlide: React.SFC<{}> = () => (
    <Slide>
        <Heading>Why Should I Care?</Heading>
        <List>
            <Appear>
                <ListItem>My stuff works.</ListItem>
            </Appear>
            <Appear>
                <ListItem>I've never had any problems using it before.</ListItem>
            </Appear>
            <Appear>
                <ListItem>This seems like a ton of extra noise.</ListItem>
            </Appear>
        </List>
    </Slide>
);