# Ultimate AI Browser JavaScript Starter

A modern JavaScript application built with Vite, designed for AI-powered development and vibe coders.

The goal is to have less AI hallucinations and output higher quality code output with less bugs.

## Features

- AI first, coding environment
- `.windsurfrules` file for AI guidance. This keeps AI on track based on our preferences
- JSDoc types and type checking keeps AI on track and reduces hallucinations
- ESLint will raise errors, alerting the AI of mistakes and preventing hallucinations
- Prettier and ESlint configured to work together
- GitHub Pages deployment ready (builds to `docs` directory)
- Jest testing framework configured to work with type=module
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

### VSCode Recommendations

For the best development experience with this project in Visual Studio Code:

1. Install the following extensions:

   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

2. Configure format on save with Prettier:
   - Open VSCode Settings (File > Preferences > Settings or `Ctrl+,`)
   - Search for "format on save" and enable it
   - Search for "default formatter" and select "Prettier - Code formatter"

These settings will ensure your code is automatically formatted according to the project's Prettier configuration whenever you save a file.

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

You can view the live demo of this project at [https://joelnet.github.io/ultimate-ai-browser-javascript-starter/](https://joelnet.github.io/ultimate-ai-browser-javascript-starter/)

## Tips for Coding with AI

This project is designed to work seamlessly with AI coding assistants. Here are some best practices to maximize your AI-powered development experience:

### Use an AI Coding Assistant

Take advantage of AI-powered coding tools like:

- [Windsurf](https://www.windsurf.io/) - AI-powered coding assistant
- [Cursor](https://cursor.sh/) - Code editor with AI capabilities
- [Claude Desktop](https://claude.ai/desktop) - Desktop app for AI-assisted development
- Other AI-enabled coding environments

These tools can significantly boost your productivity by providing intelligent code suggestions, automating repetitive tasks, and helping with debugging.

### Commit Often

AI assistants can make mistakes or misunderstand requirements. Committing your code frequently helps in:

- Creating recovery points if AI-generated code introduces bugs
- Maintaining a clear history of changes
- Making it easier to revert specific changes without losing progress
- Enabling more focused AI assistance on smaller, well-defined tasks

### Use Types

Types are crucial for effective AI coding:

- JSDoc types (as used in this project) provide clear structure that AI can understand
- Well-typed code leads to better code completion and suggestions
- Types help AI catch potential errors before runtime
- The `npm run typecheck` command verifies type correctness

### Customize .windsurfrules

The `.windsurfrules` file is your control center for AI behavior:

- It contains project-specific guidelines that AI assistants will follow
- Customize it to enforce coding standards, architectural decisions, and best practices
- Add new rules as your project evolves to keep AI assistance aligned with your needs
- Current rules include file organization, coding style preferences, and tooling instructions

### Use Context7

[Context7](https://context7.ai/) enhances AI coding capabilities:

- Provides AI with up-to-date documentation for libraries and frameworks
- Helps AI understand best practices for specific technologies
- Reduces hallucinations by grounding AI responses in accurate documentation
- Enables more precise and relevant code suggestions

## Testing

Run tests with Jest:

```bash
npm run test
```

### Testing Recommendations

- **Test Location**: Place test files in a `__tests__` directory adjacent to the files being tested
- **Naming Convention**: Name test files with the `.test.js` suffix (e.g., `messageData.test.js` for `messageData.js`)
- **Babel Configuration**: Babel is only used for Jest to enable modern JavaScript features in tests while maintaining compatibility

See [src/lib/**tests**/messageData.test.js](src/lib/__tests__/messageData.test.js) for a practical example of testing patterns used in this project, including mocking and type assertions.

For comprehensive documentation on Jest testing, refer to the [official Jest documentation](https://jestjs.io/docs/getting-started).

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
│   ├── assets/            # Compiled and optimized assets
│   └── index.html         # Production HTML file
├── src/                   # Source files
│   ├── lib/               # Library/utility functions
│   │   ├── __tests__/     # Tests for library functions
│   │   └── messageData.js # Example utility function
│   ├── types/             # JSDoc type definitions
│   ├── index.html         # Main HTML entry point
│   └── main.js            # Main JavaScript entry point
├── .windsurfrules         # AI guidance rules for development
├── babel.config.cjs       # Babel configuration for Jest
├── eslint.config.js       # ESLint configuration
├── jest.config.cjs        # Jest configuration
├── jsconfig.json          # JavaScript configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration (for JSDoc types)
└── vite.config.js         # Vite configuration
```

## License

MIT

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
