// component.jsx
exports.component = name => `import React from 'react'
import styles from './${name}.module.css'

const ${name} = () => {
  return (
    <div>
      <h2 className={styles.default}>${name} Component</h2>
    </div>
  )
}

export default ${name}
`

// component.test.jsx
exports.test = name => `import React from 'react'
import { render, screen } from '@testing-library/react'
import ${name} from './${name}'

describe('${name}', () => {
  it('should render Heading', () => {
    render(<${name} />)
    expect(screen.getByRole('heading', { name: /${name}/i })).toBeInTheDocument()
  })
})
`

// index.js
exports.barrel = name => `import ${name} from './${name}'
export default ${name}
`
