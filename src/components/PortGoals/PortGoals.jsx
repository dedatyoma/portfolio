import React from 'react'
import './PortGoals.css' 
import {Box, Container, Typography} from '@mui/material'

const PortGoals = () => {

  const portfolioLossRatioData = { target: 55, value: 48.2 };
  const renewalRetentionData = { targetMin: 85, targetMax: 90, value: 88 };
  const newBusinessTargetData = { target: 12000000, value: 8100000 };
  const annualGwpTargetData = { target: 42000000, value: 28400000 };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  return (
    <Box className="port-goals">
      <h1 className="port-goals-title">Portfolio goals</h1>
      <Container className="goal-section">
        <Typography className="goal-title">PORTFOLIO LOSS RATIO TARGET</Typography>
        <div className="goal-bar-container">
          <div className="goal-bar loss-ratio-bar">
            <div
              className={`goal-bar-fill ${portfolioLossRatioData.value <= portfolioLossRatioData.target ? 'good' : 'bad'}`}
              style={{ width: `${portfolioLossRatioData.value / 100 * 100}%` }}
            />
          </div>
          <div className="goal-bar-labels">
            <span className="goal-bar-value">{portfolioLossRatioData.value}%</span>
            <span className="goal-bar-target">TG:{portfolioLossRatioData.target}%</span>
          </div>
          <div className="goal-bar-status">
            <span className={portfolioLossRatioData.value <= portfolioLossRatioData.target ? 'good' : 'bad'}>
              {(portfolioLossRatioData.value - portfolioLossRatioData.target).toFixed(1)}% ({portfolioLossRatioData.value <= portfolioLossRatioData.target ? 'GOOD' : 'BAD'})
            </span>
          </div>
        </div>
      </Container>
      <Container className="goal-section">
        <Typography className="goal-title">RENEWAL RETENTION</Typography>
        <div className="goal-bar-container">
          <div className="goal-bar renewal-bar">
            <div
              className={`goal-bar-fill ${renewalRetentionData.value >= renewalRetentionData.targetMin && renewalRetentionData.value <= renewalRetentionData.targetMax ? 'good' : 'bad'}`}
              style={{ width: `${renewalRetentionData.value}%` }}
            />
          </div>
          <div className="goal-bar-labels">
            <span className="goal-bar-value">{renewalRetentionData.value}%</span>
            <span className="goal-bar-target">TG:{renewalRetentionData.targetMin}-{renewalRetentionData.targetMax}%</span>
          </div>
          <div className="goal-bar-status">
            <span className={renewalRetentionData.value >= renewalRetentionData.targetMin && renewalRetentionData.value <= renewalRetentionData.targetMax ? 'good' : 'bad'}>
              {renewalRetentionData.value >= renewalRetentionData.targetMin && renewalRetentionData.value <= renewalRetentionData.targetMax ? 'ON TARGET' : 'OFF TARGET'}
            </span>
          </div>
        </div>
      </Container>
      <Container className="goal-section">
        <Typography className="goal-title">NEW BUSINESS TARGET</Typography>
        <div className="goal-bar-container">
          <div className="goal-bar business-bar">
            <div
              className="goal-bar-fill business-fill"
              style={{ width: `${(newBusinessTargetData.value / newBusinessTargetData.target) * 100}%` }}
            />
          </div>
          <div className="goal-bar-labels">
            <span className="goal-bar-value">{formatCurrency(newBusinessTargetData.value)}</span>
            <span className="goal-bar-target">{formatCurrency(newBusinessTargetData.target)}</span>
          </div>
          <div className="goal-bar-status">
            <span>{Math.round((newBusinessTargetData.value / newBusinessTargetData.target) * 100)}%</span>
          </div>
        </div>
      </Container>
      <Container className="goal-section">
        <Typography className="goal-title">ANNUAL GWP TARGET</Typography>
        <div className="goal-bar-container">
          <div className="goal-bar gwp-bar">
            <div
              className="goal-bar-fill gwp-fill"
              style={{ width: `${(annualGwpTargetData.value / annualGwpTargetData.target) * 100}%` }}
            />
          </div>
          <div className="goal-bar-labels">
            <span className="goal-bar-value">{formatCurrency(annualGwpTargetData.value)}</span>
            <span className="goal-bar-target">{formatCurrency(annualGwpTargetData.target)}</span>
          </div>
          <div className="goal-bar-status">
            <span>{Math.round((annualGwpTargetData.value / annualGwpTargetData.target) * 100)}%</span>
          </div>
        </div>
      </Container>
    </Box>
  )
}
export default PortGoals