import findHighestUpgradable from '.';

describe('@/utils/version/findHighestUpgradable/index.ts', () => {
  /**
   * 这是 antd 的版本号列表
   */
  const versions = [
    '0.0.1',
    '0.1.0-pre',
    '0.1.0-beta2',
    '0.7.0-beta1',
    '0.7.0-beta2',
    '0.7.0-beta3',
    '0.7.0',
    '0.7.1',
    '0.7.2',
    '0.7.3-beta1',
    '0.7.3-beta2',
    '0.7.3-beta3',
    '0.7.3-beta4',
    '0.7.3-beta5',
    '0.7.3-beta6',
    '0.7.3',
    '0.8.0-beta1',
    '0.8.0-beta2',
    '0.8.0-beta3',
    '0.8.0-beta4',
    '0.8.0-beta5',
    '0.8.0-beta6',
    '0.8.0-beta7',
    '0.8.0',
    '0.8.1-beta1',
    '0.9.0-beta1',
    '0.9.0-beta2',
    '0.9.0-beta3',
    '0.9.0-beta4',
    '0.9.0-beta5',
    '0.9.0-beta6',
    '0.9.0-beta7',
    '0.9.0-beta8',
    '0.9.0-beta9',
    '0.9.0-beta10',
    '0.9.0',
    '0.9.1-beta1',
    '0.9.1-beta2',
    '0.9.1-beta3',
    '0.9.1-beta4',
    '0.9.1-beta5',
    '0.9.1-beta6',
    '0.9.1-beta7',
    '0.9.1-beta9',
    '0.9.1-beta10',
    '0.9.1-beta11',
    '0.9.1-beta12',
    '0.9.1-beta13',
    '0.9.1',
    '0.10.0-beta2',
    '0.10.0-beta3',
    '0.10.0-beta4',
    '0.10.0-beta5',
    '0.10.0-beta6',
    '0.10.0-beta7',
    '0.9.2',
    '0.10.0-beta8',
    '0.10.0-beta9',
    '0.9.3',
    '0.10.0-beta10',
    '0.10.0-beta11',
    '0.10.0-beta12',
    '0.10.0-beta13',
    '0.10.0-beta14',
    '0.10.0-beta15',
    '0.10.0-beta16',
    '0.9.4',
    '0.10.0-beta17',
    '0.10.0-beta18',
    '0.10.0-beta19',
    '0.10.0-beta20',
    '0.10.0-beta21',
    '0.10.0-beta22',
    '0.9.5',
    '0.10.0-beta23',
    '0.10.0-beta25',
    '0.10.0-beta26',
    '0.10.0-beta27',
    '0.10.0-beta28',
    '0.10.0-beta29',
    '0.10.0-beta30',
    '0.10.0',
    '0.10.1',
    '0.10.2',
    '0.10.3',
    '0.10.4',
    '0.11.0-beta1',
    '0.11.0-beta2',
    '0.11.0-beta3',
    '0.11.0-beta4',
    '0.11.0-beta5',
    '0.11.0-beta6',
    '0.11.0',
    '0.11.1',
    '0.11.2',
    '0.10.5',
    '0.12.0-beta.10',
    '0.12.0-beta.11',
    '0.12.0-beta.12',
    '0.12.0-beta.13',
    '0.12.0-beta.14',
    '0.12.0-beta.15',
    '0.11.3',
    '0.12.0-beta.16',
    '0.12.0-beta.17',
    '0.12.0-beta.18',
    '0.12.0-beta.19',
    '0.12.0-beta.20',
    '0.12.0-beta.21',
    '0.12.0-beta.22',
    '0.12.0-beta.23',
    '0.12.0-beta.24',
    '0.12.0-beta.25',
    '0.12.0-beta.26',
    '0.12.0-beta.27',
    '0.12.0-beta.28',
    '0.12.0-beta.29',
    '0.12.0-beta.30',
    '0.12.0-beta.31',
    '0.12.0-beta.32',
    '0.12.0-beta.33',
    '0.12.0-beta.34',
    '0.12.0',
    '0.12.1',
    '0.12.2',
    '0.12.3',
    '0.12.4',
    '0.12.5',
    '0.12.6',
    '0.12.7',
    '0.12.8',
    '0.12.10',
    '0.12.11-beta',
    '0.12.11',
    '0.12.12',
    '0.12.13',
    '1.0.0-beta',
    '1.0.0-beta.0',
    '1.0.0-beta.1',
    '1.0.0-beta.2',
    '0.12.14',
    '1.0.0-beta.3',
    '0.12.15',
    '0.12.16',
    '1.0.0-beta.4',
    '1.0.0-beta.5',
    '1.0.0-beta.6',
    '1.0.0-beta.7',
    '1.0.0-beta.8',
    '0.12.17',
    '1.0.0-beta.9',
    '1.0.0-beta.10',
    '1.0.0',
    '1.0.1',
    '1.1.0',
    '1.2.0',
    '1.2.1',
    '1.3.0',
    '1.3.1',
    '1.3.2',
    '1.4.0',
    '1.4.1',
    '1.5.0',
    '1.5.1',
    '1.6.0',
    '1.6.1',
    '1.6.2',
    '1.6.3',
    '1.6.4',
    '1.6.5',
    '1.7.0',
    '1.8.0',
    '1.9.0',
    '1.9.1',
    '1.10.0',
    '1.11.0',
    '2.0.0-beta.0',
    '2.0.0-beta.1',
    '2.0.0-beta.2',
    '2.0.0-beta.3',
    '1.11.1',
    '2.0.0-beta.4',
    '2.0.0-beta.5',
    '2.0.0-beta.6',
    '2.0.0-beta.7',
    '2.0.0-beta.8',
    '2.0.0-beta.9',
    '2.0.0-beta.10',
    '2.0.0-beta.11',
    '2.0.0-beta.12',
    '1.11.2',
    '2.0.0-beta.13',
    '2.0.0',
    '2.0.1',
    '2.1.0',
    '2.2.0',
    '2.2.1',
    '2.3.0',
    '2.3.1',
    '2.3.2',
    '2.4.0',
    '2.4.1',
    '2.4.2',
    '2.4.3',
    '1.11.3',
    '1.11.4',
    '2.5.0',
    '2.5.1',
    '2.5.2',
    '2.5.3',
    '2.6.0',
    '2.6.1',
    '1.11.5',
    '1.11.6',
    '2.6.2',
    '2.6.3',
    '2.6.4',
    '2.7.0',
    '2.7.1',
    '2.7.2',
    '2.7.3',
    '2.7.4',
    '2.8.0',
    '2.8.1',
    '2.8.2',
    '2.8.3',
    '2.9.0',
    '2.9.1',
    '2.9.2',
    '2.9.3',
    '2.10.0',
    '2.10.1',
    '2.10.2',
    '2.10.3',
    '2.10.4',
    '2.11.0',
    '2.12.0-beta1',
    '2.11.1',
    '2.11.2',
    '2.12.0',
    '2.12.1-beta.0',
    '2.12.1-beta.1',
    '2.12.1-beta.2',
    '2.12.1-beta.3',
    '2.12.1',
    '2.12.2',
    '2.12.3',
    '2.12.4',
    '2.12.5',
    '3.0.0-alpha0',
    '3.0.0-alpha.0',
    '3.0.0-alpha.1',
    '2.12.6',
    '3.0.0-alpha.3',
    '2.12.7',
    '3.0.0-alpha.5',
    '2.12.8',
    '2.13.0',
    '3.0.0-alpha.6',
    '3.0.0-alpha.7',
    '3.0.0-alpha.8',
    '3.0.0-alpha.9',
    '3.0.0-alpha.10',
    '2.13.1',
    '2.13.2',
    '2.13.3',
    '3.0.0-alpha.11',
    '3.0.0-alpha.12',
    '3.0.0-alpha.13',
    '2.13.4',
    '2.13.5',
    '3.0.0-alpha.14',
    '2.13.6',
    '3.0.0-alpha.15',
    '3.0.0-alpha.16',
    '3.0.0-alpha.17',
    '2.13.7',
    '3.0.0-alpha.18',
    '3.0.0-alpha.19',
    '3.0.0-alpha.20',
    '3.0.0-alpha.21',
    '3.0.0-alpha.22',
    '3.0.0-alpha.23',
    '3.0.0-alpha.24',
    '2.13.8',
    '3.0.0-beta.1',
    '3.0.0-beta.2',
    '3.0.0-beta.3',
    '3.0.0-beta.4',
    '3.0.0-beta.5',
    '2.13.9',
    '3.0.0-beta.6',
    '2.13.10',
    '3.0.0-beta.7',
    '3.0.0-beta.8',
    '3.0.0-beta.9',
    '3.0.0-rc.1',
    '3.0.0-rc.2',
    '3.0.0-rc.3',
    '3.0.0-rc.4',
    '2.13.11',
    '3.0.0',
    '3.0.1',
    '3.0.2',
    '3.0.3',
    '3.1.0',
    '3.1.1',
    '3.1.2',
    '3.1.3',
    '3.1.4',
    '3.1.5',
    '3.1.6',
    '3.2.0',
    '3.2.1',
    '3.2.2',
    '2.13.12',
    '3.2.3',
    '2.13.13',
    '3.3.0',
    '3.3.1',
    '3.3.2',
    '3.3.3',
    '3.4.0',
    '3.4.1',
    '3.4.2',
    '3.4.3',
    '2.13.14',
    '3.4.4',
    '3.4.5',
    '3.5.0',
    '3.5.1',
    '3.5.2',
    '3.5.3',
    '3.5.4',
    '3.6.0',
    '3.6.1',
    '3.6.2',
    '3.6.3',
    '3.6.4',
    '3.6.5',
    '3.6.6',
    '3.7.0',
    '3.7.1',
    '3.7.2',
    '3.7.3',
    '3.8.0',
    '3.8.1',
    '3.8.2',
    '3.9.0-beta.0',
    '3.8.3',
    '3.8.4',
    '3.9.0-beta.2',
    '3.9.0-beta.4',
    '3.9.0-beta.5',
    '3.9.0-beta.6',
    '3.9.0',
    '3.9.1',
    '3.9.2',
    '3.9.3',
    '3.10.0',
    '3.10.1',
    '3.10.2',
    '3.10.3',
    '3.10.4',
    '3.10.5',
    '3.10.6',
    '3.10.7',
    '3.10.8',
    '3.10.9',
    '3.11.0',
    '3.11.1',
    '3.11.2',
    '3.11.3',
    '3.11.4-beta.0',
    '3.11.4-beta.1',
    '3.11.4',
    '3.11.5',
    '3.11.6',
    '3.10.10',
    '3.9.4',
    '3.12.0',
    '3.12.1',
    '3.12.2',
    '3.12.3',
    '3.12.4',
    '3.13.0',
    '3.13.1',
    '3.13.2',
    '3.13.3',
    '3.13.4',
    '3.13.5',
    '3.13.6',
    '3.14.0',
    '3.14.1',
    '3.15.0',
    '3.15.1',
    '3.15.2',
    '3.16.0',
    '3.16.1',
    '3.16.2-alpha.0',
    '3.16.2',
    '3.16.3',
    '3.16.4',
    '3.16.5',
    '3.16.6',
    '3.17.0',
    '3.18.0',
    '3.18.1',
    '3.18.2',
    '3.19.0',
    '3.19.1',
    '3.19.2',
    '3.19.3',
    '3.19.4',
    '3.19.5',
    '3.19.6',
    '3.19.7',
    '3.19.8',
    '3.20.0',
    '3.20.1',
    '3.20.2',
    '3.20.3',
    '3.20.4',
    '3.20.5',
    '3.20.6',
    '3.20.7',
    '4.0.0-alpha.0',
    '3.21.0',
    '3.21.1',
    '3.21.2',
    '3.21.3-beta.0',
    '3.21.3',
    '3.21.4',
    '4.0.0-alpha.1',
    '4.0.0-alpha.2',
    '3.22.0',
    '3.22.1',
    '3.23.0-beta.0',
    '3.22.2',
    '4.0.0-alpha.3',
    '3.23.0',
    '3.23.1',
    '3.23.2',
    '3.23.3',
    '4.0.0-alpha.4',
    '3.23.4',
    '4.0.0-alpha.5',
    '4.0.0-alpha.6',
    '3.23.5',
    '3.23.6',
    '4.0.0-alpha.7',
    '3.24.0',
    '3.24.1',
    '3.24.2',
    '3.24.3',
    '3.25.0',
    '4.0.0-alpha.8',
    '3.25.1',
    '4.0.0-alpha.9',
    '3.25.2',
    '3.25.3',
    '4.0.0-alpha.10',
    '4.0.0-alpha.11',
    '3.26.0',
    '4.0.0-alpha.12',
    '4.0.0-alpha.13',
    '4.0.0-alpha.14',
    '3.26.1',
    '3.26.2',
    '4.0.0-beta.0',
    '3.26.3',
    '3.26.4',
    '4.0.0-beta.1',
    '3.26.5',
    '3.26.6',
    '4.0.0-rc.0',
    '4.0.0-rc.1',
    '3.26.7',
    '4.0.0-rc.2',
    '4.0.0-rc.3',
    '3.26.8',
    '3.26.9',
    '4.0.0-rc.4',
    '3.26.10',
    '4.0.0-rc.5',
    '3.26.11',
    '3.26.12',
    '4.0.0-rc.6',
    '4.0.0',
    '4.0.1',
    '3.26.13',
    '4.0.2',
    '4.0.3',
    '4.0.4',
    '3.26.14',
    '4.1.0',
    '3.26.15',
    '4.1.1',
    '4.1.2',
    '4.1.3',
    '4.1.4',
    '4.1.5',
    '3.26.16',
    '4.2.0',
    '4.2.1',
    '4.2.2',
    '3.26.17',
    '4.2.3',
    '4.2.4',
    '4.2.5-alpha.0',
    '4.2.5',
    '4.3.0',
    '4.3.1',
    '4.3.2',
    '4.3.3',
    '4.3.4',
    '3.26.18',
    '4.3.5',
    '4.4.0',
    '4.4.1',
    '4.4.2',
    '4.4.3',
    '4.5.0',
    '4.5.1',
    '4.5.2',
    '4.5.3',
    '4.5.4',
    '4.6.0',
    '4.6.1',
    '4.6.2',
    '4.6.3',
    '4.6.4',
    '4.6.5',
    '4.6.6',
    '4.7.0',
    '4.7.1',
    '4.7.2',
    '4.7.3',
    '3.26.19',
    '3.26.20',
    '4.8.0',
    '4.8.1',
    '4.8.2',
    '4.8.3',
    '4.8.4',
    '4.8.5',
    '4.8.6',
    '4.9.0',
    '4.9.1',
    '4.9.2',
    '4.9.3',
    '4.9.4',
    '4.10.0',
    '4.10.1',
    '4.10.2',
    '4.10.3',
    '4.11.0',
    '4.11.1',
    '4.11.2',
    '4.11.3',
    '4.12.0',
    '4.12.1',
    '4.12.2',
    '4.12.3',
    '4.13.0',
    '4.13.1',
    '4.14.0',
    '4.14.1',
    '4.15.0',
    '4.15.1',
    '4.15.2',
    '4.15.3-alpha.0',
    '4.15.3',
    '4.15.4',
    '4.16.0-alpha.0',
    '4.16.0-alpha.1',
    '4.16.0-alpha.2',
    '4.15.5',
    '4.15.6',
    '4.16.0',
    '4.16.1',
    '4.16.2',
    '4.16.3',
    '4.16.5',
    '4.16.6',
    '4.16.7',
    '4.16.8',
    '4.16.9',
    '4.16.10',
    '4.16.11',
    '4.16.12',
    '4.16.13',
    '4.17.0-alpha.0',
    '4.17.0-alpha.1',
    '4.17.0-alpha.2',
    '4.17.0-alpha.3',
    '4.17.0-alpha.4',
    '4.17.0-alpha.5',
    '4.17.0-alpha.6',
    '4.17.0-alpha.7',
    '4.17.0-alpha.8',
    '4.17.0-alpha.9',
    '4.17.0-alpha.10',
    '4.17.0',
    '4.17.1-alpha.0',
    '4.17.1-alpha.1',
    '4.17.1',
    '4.17.2',
    '4.17.3',
    '4.17.4',
    '4.18.0',
    '4.18.1',
    '4.18.2',
    '4.18.3',
    '4.18.4',
    '4.18.5',
    '4.18.6',
    '4.18.7',
    '4.18.8',
    '4.18.9',
    '4.19.0',
    '4.19.1-alpha.0',
    '4.19.1',
    '4.19.2',
    '4.19.3',
    '4.19.4',
    '4.19.5-alpha.0',
    '4.19.5',
    '4.20.0-alpha.0',
    '4.20.0-alpha.1',
    '4.20.0',
    '4.20.1',
    '4.20.2',
    '4.20.3',
    '4.20.4',
    '4.20.5',
    '4.20.6',
    '4.20.7',
    '4.21.0',
    '4.21.1',
    '4.21.2',
    '4.21.3',
    '4.21.4',
    '5.0.0-experimental.0',
    '4.21.5',
    '5.0.0-experimental.1',
    '5.0.0-experimental.2',
    '5.0.0-experimental.3',
    '5.0.0-experimental.4',
    '4.21.6',
    '5.0.0-experimental.5',
    '4.21.7',
    '5.0.0-experimental.6',
    '5.0.0-experimental.7',
    '5.0.0-experimental.8',
    '5.0.0-experimental.9',
    '4.22.0',
    '4.22.1',
    '5.0.0-experimental.10',
    '4.22.2',
    '4.22.3',
    '5.0.0-experimental.11',
    '5.0.0-experimental.12',
    '5.0.0-experimental.13',
    '5.0.0-experimental.14',
    '5.0.0-experimental.15',
    '4.22.4',
    '4.22.5',
    '5.0.0-experimental.16',
    '4.22.6',
    '5.0.0-experimental.17',
    '5.0.0-experimental.18',
    '5.0.0-experimental.19',
    '4.22.7',
    '5.0.0-experimental.20',
    '4.22.8',
    '5.0.0-experimental.21',
    '5.0.0-experimental.22',
    '4.23.0',
    '5.0.0-experimental.23',
    '4.23.1',
    '5.0.0-experimental.24',
    '4.23.2',
    '5.0.0-experimental.25',
    '5.0.0-experimental.26',
    '5.0.0-experimental.27',
    '5.0.0-experimental.28',
    '5.0.0-experimental.29',
    '4.23.3',
    '5.0.0-experimental.30',
    '5.0.0-alpha.0',
    '4.23.4',
    '5.0.0-alpha.1',
    '4.23.5',
    '5.0.0-alpha.2',
    '4.23.6',
    '5.0.0-alpha.3',
    '5.0.0-alpha.4',
    '5.0.0-alpha.31',
    '5.0.0-alpha.32',
    '5.0.0-alpha.33',
    '4.24.0',
    '5.0.0-alpha.34',
    '4.24.1',
    '5.0.0-beta.0',
    '4.24.2',
    '5.0.0-beta.1',
    '5.0.0-beta.2',
    '5.0.0-rc.0',
    '5.0.0-rc.1',
    '4.24.3',
    '5.0.0-rc.2',
    '5.0.0-rc.3',
    '5.0.0',
    '5.0.1',
    '4.24.4',
    '5.0.2',
    '5.0.3',
    '5.0.4',
    '4.24.5',
    '5.0.5',
    '5.0.6',
    '5.0.7',
    '5.1.0',
    '5.1.1',
    '4.24.6',
    '4.24.7',
    '5.1.2',
    '5.1.3',
    '5.1.4',
    '5.1.5',
    '5.1.6',
    '5.1.7',
    '5.2.0',
    '4.24.8',
    '5.2.1',
    '5.2.2',
    '5.2.3',
    '5.3.0',
    '5.3.1',
    '5.3.2',
    '5.3.3',
    '5.4.0',
    '5.4.1',
    '5.4.2',
    '5.4.3',
    '4.24.9',
    '5.4.4',
    '5.4.5',
    '5.4.6',
    '4.24.10',
    '5.4.7',
    '5.5.0',
    '5.6.0-alpha.0',
    '5.5.1',
    '5.5.2',
    '5.6.0',
    '5.6.1',
    '5.6.2-alpha.0',
    '5.6.2',
    '5.6.3',
    '4.24.11',
    '4.24.12',
    '5.6.4',
    '5.7.0',
    '5.7.1',
    '5.7.2',
    '5.7.3',
    '5.8.0',
    '5.8.1',
    '4.24.13',
    '5.8.2',
    '5.8.3',
    '5.8.4',
    '5.8.5',
    '5.8.6',
    '4.24.14',
    '5.9.0',
    '5.9.1',
    '5.9.2',
    '5.9.3',
    '5.9.4',
    '5.10.0',
    '5.10.1',
    '5.10.2',
    '5.10.3',
    '5.11.0',
    '5.11.1',
    '5.11.2',
    '4.24.15',
    '5.11.3-alpha.0',
    '5.11.3',
    '5.11.4',
    '5.11.5'
  ];

  it('处理包含预发布版本号', () => {
    const currentVersion = '0.1.0-beta2';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeFalsy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('0.12.17');
    expect(result.patch.version).toBe('0.1.0-beta2');
  });

  it('处理包含多个预发布版本的补丁', () => {
    const currentVersion = '0.9.0';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeFalsy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('0.12.17');
    expect(result.patch.version).toBe('0.9.5');
  });

  it('当前版本已是最新稳定版本', () => {
    const currentVersion = '5.11.5';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeTruthy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('5.11.5');
    expect(result.patch.version).toBe('5.11.5');
  });

  it('处理包含 experimental 预发布版本的补丁', () => {
    const currentVersion = '5.0.0-experimental.5';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeFalsy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('5.11.5');
    expect(result.patch.version).toBe('5.0.7');
  });

  it('当前版本是最新的 experimental 版本', () => {
    const currentVersion = '5.11.5-experimental.10';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeFalsy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('5.11.5');
    expect(result.patch.version).toBe('5.11.5');
  });

  it('版本号，带有范围等干扰字符', () => {
    const latestVersion = '5.11.5';
    const result1 = findHighestUpgradable('^5.11.5-experimental.10', latestVersion, versions);
    const result2 = findHighestUpgradable('fds^asdf5.11.5-experimental.10asdf', latestVersion, versions);

    expect(result1.no).toBeFalsy();
    expect(result1.major.version).toBe('5.11.5');
    expect(result1.minor.version).toBe('5.11.5');
    expect(result1.patch.version).toBe('5.11.5');
    expect(result2.no).toBeFalsy();
    expect(result2.major.version).toBe('5.11.5');
    expect(result2.minor.version).toBe('5.11.5');
    expect(result2.patch.version).toBe('5.11.5');
  });

  it('处理只有预发布版本的情况', () => {
    const currentVersion = '0.9.3';
    const latestVersion = '0.10.0-beta.16';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeFalsy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('0.12.17');
    expect(result.patch.version).toBe('0.9.5');
  });

  it('处理版本号错误的情况', () => {
    const currentVersion = 'a.b.c';
    const latestVersion = '5.11.5';
    const result = findHighestUpgradable(currentVersion, latestVersion, versions);

    expect(result.no).toBeTruthy();
    expect(result.major.version).toBe('5.11.5');
    expect(result.minor.version).toBe('5.11.5');
    expect(result.patch.version).toBe('5.11.5');
  });
});
