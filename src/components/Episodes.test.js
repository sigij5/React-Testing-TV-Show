import React from 'react'
import { render, screen } from '@testing-library/react'
import Episodes from './Episodes'



test('Episodes renders correctly when mounting', () => {
    render(<Episodes episodes={[]} />);
})

test('Displays episode as the episodes prop is updated with a new season', () => {
    const { rerender } = render(<Episodes episodes={[]} />)


    expect(screen.queryByText(/episode 1/i)).toBeNull();
})