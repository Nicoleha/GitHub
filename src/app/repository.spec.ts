import { Repository } from './repository';

describe('Repository', () => {
  it('should create an instance', () => {
    expect(new Repository(0,0,0,new Date(),"","")).toBeTruthy();
  });
});
