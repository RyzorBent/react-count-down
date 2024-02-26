import React, { useState } from 'react';
import { Input, Button, Row, Col, Statistic } from 'antd';
import { ClockCircleOutlined, YoutubeOutlined } from '@ant-design/icons';
import GlobalColors from '../assets/colors/GlobalColors';
import dayjs from 'dayjs';

// Calculate the deadline based on a fixed end date and time
const endDate = dayjs('2024-03-16T09:00:00'); // March 15th, 2024, at 9:00 AM
const now = dayjs();
const deadline = endDate.diff(now);

const onFinish = () => {
  console.log('Countdown finished');
};

const socialIcons = {
  youtube: <YoutubeOutlined style={{ fontSize: 40 }} />,
  // Add other social media icons as needed
};

const socialLinks = [
  { icon: socialIcons.youtube, href: 'https://www.youtube.com/@Surveyr.Africa', key: 'youtube' },
  // Add other social media links as needed
];

function Counter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    window.location.href = `mailto:info@surveyr.africa?subject=Early Access Request&body=Hi%20SurveyrTeam%20Please%20provide%20me%20with%20early%20access%20to%20the%20platform.%20My%20email%20is%20${encodeURIComponent(
      email
    )}.`;
  };

  return (
    <Row>
      <Col style={{ textAlign: 'center' }} span={24}>
        <Statistic.Countdown
          title=''
          value={Date.now() + deadline}
          onFinish={onFinish}
          format='D [Days] HH [Hours] mm [Min] ss [Sec]'
          valueStyle={{ color: '#FFF', fontSize: '2rem' }}
          prefix={<ClockCircleOutlined style={{ fontSize: '2rem' }} />}
          className='heroText gradientText'
        />
        <Input.Group compact style={{ marginTop: '1em', marginLeft: 48 }}>
          <Input
            style={{ width: 'calc(80% - 100px)', height: '40px' }}
            placeholder='For early access 🚀'
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type='primary'
            style={{ height: '40px', backgroundColor: GlobalColors.mainPurple }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        {socialLinks.map((link) => (
          <Button
            key={link.key}
            type='link'
            href={link.href}
            icon={link.icon}
            target='_blank'
            style={{ color: GlobalColors.mainPurple, fontSize: '1.5rem' }}
          />
        ))}
      </Col>
    </Row>
  );
}

export default Counter;
