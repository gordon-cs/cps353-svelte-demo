// User.stories.js
import User from './User.svelte';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    component: User,
};

export const SetName = {
    render: (args) => ({
        Component: User,
    }),
    play: async({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Name starts as Guest
        await expect(canvas.getByDisplayValue('Guest')).toBeInTheDocument();

        // Change name to "First Last"
        await userEvent.type(canvas.getByDisplayValue('Guest'),
                             '{backspace}{backspace}{backspace}{backspace}' +
                             '{backspace}First Last');
        await expect(canvas.getByDisplayValue('First Last'))
            .toBeInTheDocument();
        await expect(canvas.queryByDisplayValue('Guest')).toBeNull();
    },
};
