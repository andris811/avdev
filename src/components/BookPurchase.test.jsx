import { render, screen } from '@testing-library/react'
import BookPurchase from './BookPurchase'

test('offers the Payhip button with an external sample and no full-page embed', () => {
  const { container } = render(<BookPurchase />)
  const button = screen.getByRole('link', { name: 'Buy on Payhip' })
  expect(button).toHaveAttribute('href', 'https://payhip.com/b/6gKJm')
  expect(button).toHaveAttribute('target', '_blank')
  expect(button).toHaveAttribute('data-product', '6gKJm')
  expect(button).toHaveAttribute('data-theme', 'none')
  expect(container.querySelector('iframe')).toBeNull()
  const sample = screen.getByRole('link', { name: /sample on Payhip/i })
  expect(sample).toHaveAttribute('href', 'https://payhip.com/preview/6gKJm')
  expect(sample).toHaveAttribute('target', '_blank')
})

test('does not duplicate the checkout script when reopening the article', () => {
  const first = render(<BookPurchase />)
  first.unmount()
  render(<BookPurchase />)
  expect(document.querySelectorAll('script[src="https://payhip.com/payhip.js"]')).toHaveLength(1)
})
