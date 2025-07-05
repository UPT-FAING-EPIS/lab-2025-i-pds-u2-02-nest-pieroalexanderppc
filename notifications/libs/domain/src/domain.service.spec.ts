import { LongMessage } from './long-message';
import { EmailMessageSender } from './email-message-sender';
import { AbstractMessage } from './abstract-message';
import { ShortMessage } from './short-message';
import { SmsMessageSender } from './sms-message-sender';

describe('GivenLongMessage_WhenSend_ThenEmailIsTriggered', () => {
  let longMessage: AbstractMessage;
  let confirm: string;

  beforeEach(async () => {
    const Message = "Este es un mensaje bien pero bien largoooooooooooooooooooooooo.";
    longMessage = new LongMessage(new EmailMessageSender());
    confirm = longMessage.SendMessage(Message);
  });

  it('Long Message should not be null', () => {
    expect(confirm).not.toBeNull();
  });

  it('Long Message should contain characters more than 0', () => {
    expect(confirm.length > 0).toBeTruthy();
  });
});

describe('GivenShortMessage_WhenSend_ThenSMSIsTriggered', () => {
  let shortMessage: AbstractMessage;
  let confirm: string;

  beforeEach(async () => {
    const Message = "Este es un mensaje corto.";
    shortMessage = new ShortMessage(new SmsMessageSender());
    confirm = shortMessage.SendMessage(Message);
  });

  it('Short Message should not be null', () => {
    expect(confirm).not.toBeNull();
  });

  it('Short Message should contain characters more than 0', () => {
    expect(confirm.length > 0).toBeTruthy();
  });
});

describe('GivenLargeMessage_WhenSendinSMS_ThenOccursException', () => {
  let shortMessage: AbstractMessage;
  const Message = "Este es un mensaje largooooooooooooooooo.";

  beforeEach(async () => {
    shortMessage = new ShortMessage(new SmsMessageSender());
  });

  it('Large Message in SMS should throw an error', () => {
    expect(() => {
      shortMessage.SendMessage(Message);
    }).toThrow(new ShortMessage(new SmsMessageSender()).LARGE_ERROR_MESSAGE);
  });
});
