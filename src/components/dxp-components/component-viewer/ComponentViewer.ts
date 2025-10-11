// main.ts
export type Input = Partial<{
  componentViewerTabTitleLeft: string;
  componentViewerTabTitleRight: string;
  componentViewerStorybookPreview: string;
  componentViewerCodeBlock: string;
  componentViewerFigmaUrl: string;
  componentViewerStorybookUrl: string;
  componentViewerGitHubUrl: string;
  componentViewerNewTab: string;
}>;

export default async function main(input: Input, info?: unknown): Promise<string> {
  return `<div class="container">
      <div class="ntgds-component-viewer mx-auto">
        <!-- Tabs -->
        <ul class="nav nav-tabs mb-3" id="previewTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" 
            role="tab" aria-controls="design" aria-selected="true">
              ${input.componentViewerTabTitleLeft ?? ""}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code" type="button" 
            role="tab" aria-controls="code" aria-selected="false">
              ${input.componentViewerTabTitleRight ?? ""}
            </button>
          </li>
        </ul>

        <!-- Frame -->
        <div class="preview-frame p-2 mb-2">
          <div class="tab-content">
            <!-- Design pane -->
            <div class="tab-pane fade show active" id="design" role="tabpanel" aria-labelledby="design-tab">
              <div class="preview-body">
              <iframe src="${input.componentViewerStorybookPreview ?? ""}" width="800" height="200"></iframe>
              </div>
            </div>

            <!-- Code pane -->
            <div class="tab-pane fade" id="code" role="tabpanel" aria-labelledby="code-tab">
              <pre class="m-0 p-3 bg-light rounded" style="min-height: 220px; border: 2px dashed #e9ecef">
                <code>${input.componentViewerCodeBlock ?? ""}</code>
              </pre>
            </div>
          </div>
        </div>

        <!-- Link bar -->
        <div class="link-bar d-flex flex-wrap">
          <a href="${
            input.componentViewerFigmaUrl ?? ""
          }" target="_blank" rel="noopener"> <span>Figma</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${
            input.componentViewerStorybookUrl ?? ""
          }" target="_blank" rel="noopener"> <span>Storybook</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${
            input.componentViewerGitHubUrl ?? ""
          }" target="_blank" rel="noopener"> <span>GitHub</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
          <a href="${
            input.componentViewerNewTab ?? ""
          }" target="_blank" rel="noopener"> <span>Open in new tab</span><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i> </a>
        </div>
      </div>
    </div>`;
}
