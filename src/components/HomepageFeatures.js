import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Manual soap dispencer',
    Svg: require('./../../static/img/fluid/manual.svg').default,
    //Svg: require('../../static/img/cixiu2.svg').default,
    description: (
      <>
       Soap dispenser for generating soap by manual pressure 
      </>
    ),
  },
  {
    title: 'Auto soap dispencer',
    Svg: require('./../../static/img/fluid/auto.svg').default,
    description: (
      <>
      Soap dispenser with automatic soap generation via infrared sensing
      </>
    ),
  },
  {
    title: 'List of Members',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Contributer: Jiaqi Yao, Ruixin Zhan, Brooks, Xuzhao Zhang, Ziming Zhou.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
