import { faGolang } from '@fortawesome/free-brands-svg-icons';
import FlagdSvg from '@site/static/img/flagd-no-fill.svg';
import React from 'react';
import { OpenFeatureTechnologiesPage } from '../../custom/OpenFeatureTechnologiesPage';
import CloudbeesSvg from '@site/static/img/cloudbees-no-fill.svg';
import SplitSvg from '@site/static/img/split-no-fill.svg';
import OpenTelemetry from '@site/static/img/otel-no-fill.svg';
import CheckCircle from '@site/static/img/check-circle-no-fill.svg';
import FliptSvg from '@site/static/img/flipt-no-fill.svg';

export class GoFeatures extends React.Component {
  override render() {
    return (
      <OpenFeatureTechnologiesPage
        technology="Go"
        iconDefinition={faGolang}
        sdkRepoLink={{
          title: 'Github repository',
          href: 'https://github.com/open-feature/go-sdk',
        }}
        artifact={{
          title: 'Go Package',
          href: 'https://pkg.go.dev/github.com/open-feature/go-sdk',
          instruction: 'go get github.com/open-feature/go-sdk',
          codeBlockLanguage: 'bash',
        }}
        providers={[
          {
            title: 'CloudBees Provider',
            description: 'The official CloudBees provider for OpenFeature',
            href: 'https://github.com/rollout/cloudbees-openfeature-provider-go',
            svg: CloudbeesSvg,
            vendorOfficial: true,
          },
          {
            title: 'flagd Provider',
            description: 'A provider for flagd',
            href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/flagd',
            svg: FlagdSvg,
          },
          {
            title: 'Flipt Provider',
            description: 'The official Flipt provider for OpenFeature',
            href: 'https://github.com/flipt-io/flipt-openfeature-provider-go',
            svg: FliptSvg,
            vendorOfficial: true,
          },
          {
            title: 'Split Provider',
            description: 'The official Split provider for OpenFeature',
            href: 'https://github.com/splitio/split-openfeature-provider-go',
            svg: SplitSvg,
            vendorOfficial: true,
          },
        ]}
        hooks={[
          {
            title: 'OpenTelemetry Hook',
            description: 'An OpenTelemetry hook for OpenFeature',
            href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/open-telemetry',
            svg: OpenTelemetry,
          },
          {
            title: 'Validation Hook',
            description: 'A hook which validates the result of flag evaluations',
            href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/hooks/validator',
            svg: CheckCircle,
          },
        ]}
      />
    );
  }
}
