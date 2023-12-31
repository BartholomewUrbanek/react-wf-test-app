module.exports = {
    branches: ['main'],
    repositoryUrl: "https://github.com/BartholomewUrbanek/react-wf-test-app.git",
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/npm', 
      ['@semantic-release/github', {
        assets: [
              {path: "build.zip", label: "Build" }
        ]
      }]
    ]
};