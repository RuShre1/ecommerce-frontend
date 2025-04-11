// Tests the Filter component's functionality and accessibility using React Testing Library

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../Filter';

describe('Filter Component', () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
    render(<Filter onFilterChange={mockOnFilterChange} />);
  });

  test('renders all filter options', () => {
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Minimum Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Maximum Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Size')).toBeInTheDocument();
    expect(screen.getByLabelText('Color')).toBeInTheDocument();
  });

  test('handles category filter change', () => {
    const categorySelect = screen.getByLabelText('Category');
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        category: 'Electronics'
      })
    );
  });

  test('handles price range filter change', () => {
    const minInput = screen.getByLabelText('Minimum Price');
    const maxInput = screen.getByLabelText('Maximum Price');

    fireEvent.change(minInput, { target: { value: '50' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        priceRange: expect.objectContaining({
          min: 50
        })
      })
    );

    fireEvent.change(maxInput, { target: { value: '200' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        priceRange: expect.objectContaining({
          max: 200
        })
      })
    );
  });

  test('handles size filter change', () => {
    const sizeSelect = screen.getByLabelText('Size');
    fireEvent.change(sizeSelect, { target: { value: 'M' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        size: 'M'
      })
    );
  });

  test('handles color filter change', () => {
    const colorSelect = screen.getByLabelText('Color');
    fireEvent.change(colorSelect, { target: { value: 'Black' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        color: 'Black'
      })
    );
  });
}); 