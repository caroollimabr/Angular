import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2023-05-13 para 13/05/2023', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2023-05-13')).toEqual('13/05/2023');
  })
});
