# Ultimate AI Browser JavaScript Starter

A modern JavaScript application built with Vite, designed for AI-powered development and vibe coders.

## Features

- AI first, coding environment
- `.windsurfrules` file for AI guidance. This keeps AI on track based on our preferences.
- JSDoc types and type checking because AI loves types
- ESLint will raise errors, alerting the AI of mistakes early
- Prettier and ESlint configured to work together
- GitHub Pages deployment ready (builds to `docs` directory)
- Jest testing framework
- Husky for pre-commit hooks. This will make sure the code is checked before committing

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository

   ```bash
   git clone git@github.com:joelnet/ultimate-ai-browser-javascript-starter.git
   cd ultimate-ai-browser-javascript-starter
   ```

2. Install dependencies

   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run start
```

This will launch a development server at http://localhost:3000 (or another port if 3000 is in use).

### Building for Production

Build the project for production:

```bash
npm run build
```

This will generate optimized files in the `docs` directory, ready for deployment to GitHub Pages or other hosting services.

## Testing

Run tests with Jest:

```bash
npm run test
```

## Linting

Check code quality with ESLint:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

## Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run pre-commit hooks, ensuring code quality before each commit.

### Current Pre-commit Hooks

The following commands are automatically run before each commit:

```bash
npm run lint      # Checks code with ESLint
npm run typecheck # Verifies JSDoc types with TypeScript
npm run test      # Runs Jest tests
```

### Modifying Pre-commit Hooks

To modify the pre-commit hooks, edit the `.husky/pre-commit` file.

### Bypassing Pre-commit Hooks

To bypass pre-commit hooks when committing (use sparingly):

```bash
git commit -m "Your commit message" --no-verify
```

## Project Structure

```
ultimate-ai-browser-javascript-starter/
├── docs/                  # Production build output (for GitHub Pages)
├── src/                   # Source files
│   ├── index.html         # Main HTML entry point
│   └── main.js            # Main JavaScript entry point
├── .eslintrc.yml          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── babel.config.js        # Babel configuration
├── jest.config.js         # Jest configuration
├── jsconfig.json          # JavaScript configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration (for JSDoc types)
└── vite.config.js         # `Vite configuration
```

## License

MIT

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
