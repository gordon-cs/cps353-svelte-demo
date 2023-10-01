// Counter.stories.js
import Counter from './Counter.svelte';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    component: Counter,
};

export const CountUp = {
    render: (args) => ({
        Component: Counter,
    }),
    play: async({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Counter starts at 0

        await expect(canvas.getByText('0')).toBeInTheDocument();
        // Fails, which means it's not working like I hope
        //await expect(canvas.getByText('1', {exact:false}))
        //    .not.toBeInTheDocument();

        // Click + and see Counter at 1
        await userEvent.click(
            canvas.getByLabelText('Increase the counter by one'));
        // Commented out because, while it passes, it's wrong because
        // it doesn't match when counter is 0.  Not sure how to fix it.
        // await expect(canvas.queryByDisplayValue('0')).toBeNull();

        // Not working like I expect.  Passes even when it shouldn't.
        //await expect(canvas.getByText('1', {exact:false})).toBeInTheDocument();

        // Click + twice and see Counter at 3
        await userEvent.click(
            canvas.getByLabelText('Increase the counter by one'));
        await userEvent.click(
            canvas.getByLabelText('Increase the counter by one'));
        // Not working.  Don't know why.
        await expect(canvas.getByText('3', {exact:false})).toBeInTheDocument();
    },
};
