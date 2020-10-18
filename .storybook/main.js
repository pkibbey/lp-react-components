module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y/register',
    '@storybook/preset-create-react-app'
  ]
};
