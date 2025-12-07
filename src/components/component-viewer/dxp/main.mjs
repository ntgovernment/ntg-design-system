/**
 * Component Viewer - Displays design system components with tabs for Design and Code views
 *
 * @typedef {Object} Input
 * @property {string} [componentViewerTabTitleLeft] - Left tab title (e.g., "Design")
 * @property {string} [componentViewerTabTitleRight] - Right tab title (e.g., "Code")
 * @property {string} [componentViewerStorybookPreview] - Storybook iframe URL for preview
 * @property {string} [componentViewerCodeBlock] - Code snippet or URL to display
 * @property {string} [componentViewerFigmaUrl] - Figma project URL
 * @property {string} [componentViewerStorybookUrl] - Storybook documentation URL
 * @property {string} [componentViewerGitHubUrl] - GitHub repository URL
 * @property {string} [componentViewerNewTab] - Open links in new tab ("true"/"false")
 */

async function renderComponent(input) {
  try {
    const data = input || {};
    const {
      componentViewerTabTitleLeft = "",
      componentViewerTabTitleRight = "",
      componentViewerStorybookPreview = "",
      componentViewerCodeBlock = "",
      componentViewerFigmaUrl = "",
      componentViewerStorybookUrl = "",
      componentViewerGitHubUrl = "",
      componentViewerNewTab = "",
    } = data;

    return `<div class="container">
      <div class="ntgds-component-viewer mx-auto">
        <!-- Tabs -->
        <ul class="nav nav-tabs mb-3" id="previewTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" 
            role="tab" aria-controls="design" aria-selected="true">
              ${componentViewerTabTitleLeft}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code" type="button" 
            role="tab" aria-controls="code" aria-selected="false">
              ${componentViewerTabTitleRight}
            </button>
          </li>
        </ul>

        <!-- Frame -->
        <div class="preview-frame p-2 mb-2">
          <div class="tab-content">
            <!-- Design pane -->
            <div class="tab-pane fade show active" id="design" role="tabpanel" aria-labelledby="design-tab">
              <div class="preview-body">
              <iframe src="${componentViewerStorybookPreview}" width="800" height="200"></iframe>
              </div>
            </div>

            <!-- Code pane -->
            <div class="tab-pane fade" id="code" role="tabpanel" aria-labelledby="code-tab">
              <pre class="m-0 p-3 bg-light rounded" style="min-height: 220px; border: 2px dashed #e9ecef">
                <code>${componentViewerCodeBlock}</code>
              </pre>
            </div>
          </div>
        </div>

        <!-- Link bar -->
        <div class="link-bar d-flex flex-wrap">
          <a href="${componentViewerFigmaUrl}" target="_blank" rel="noopener"> <span>Figma</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${componentViewerStorybookUrl}" target="_blank" rel="noopener"> <span>Storybook</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${componentViewerGitHubUrl}" target="_blank" rel="noopener"> <span>GitHub</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${componentViewerNewTab}" target="_blank" rel="noopener"> <span>Open in new tab</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
        </div>
      </div>
    </div>`;
  } catch (error) {
    console.error("Component Viewer Error:", error);
    return `<div class="alert alert-danger">Error rendering component: ${error.message}</div>`;
  }
}

export const main = renderComponent;
export default renderComponent;
