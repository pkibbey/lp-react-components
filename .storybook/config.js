import React from "react";
import { ThemeProvider } from 'emotion-theming';
import { configure, addDecorator } from "@storybook/react";
import theme from '../src/assets/theme';

// By importing your application's CSS here, we ensure it's included
// for each story
import '../src/assets/base-styles.css';

// A decorator is a way to wrap a story with a common set of component(s).
// Here we add the theme decorator to incoporate the Rebass and our custom theme
const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);
