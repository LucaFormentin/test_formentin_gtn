import { render, screen } from '@testing-library/react'
import AnagraficaPage from './page'
 
describe('Anagrafica', () => {
  it('renders a heading', () => {
    render(<AnagraficaPage />)
    expect(screen.getByRole("heading")).toBeDefined();
  })
})