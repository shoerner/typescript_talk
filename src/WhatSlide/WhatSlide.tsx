import * as React from 'react';
import { Appear, Code, Heading, Slide, List, ListItem, Text } from 'spectacle';
import * as twitterImage from '../images/twitter.png';
import { InstantFilm } from '../Components';

export const WhatSlide: React.SFC<{}> = () => (
    <Slide>
        <Heading>Type checking?</Heading>
        <Text>But your programs and scripts are so much more than that.</Text>
        { 
            //TODO: this should be animated.
        }
        <div>
            <InstantFilm imageSource={ twitterImage }>They're websites</InstantFilm>
            <span>They're robots</span>
            <span>They're slideshows</span>
        </div>
        <Appear><Text>And know something? They deserve better than to be <Code>Object</Code> everywhere.</Text></Appear>
        <List>
            <Appear><ListItem>prop-types</ListItem></Appear>
            <Appear>
                <ListItem>flow</ListItem>
            </Appear>
            <Appear>
                <ListItem>TypeScript</ListItem>
            </Appear>
        </List>
    </Slide>
);