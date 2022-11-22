import {CommunityOptionGetter} from './CommunityOptionGetter';

describe('QueryGetter', () => {
  const communityOptionGetter = new CommunityOptionGetter()

  it('should successfully validate query', () => {
    const given = {q: 'test', o: '1'}

    expect(communityOptionGetter.IsValid(given)).toBeTruthy()
  })

  it('should successfully validate q only query', () => {
    const given = {q: 'test'}

    expect(communityOptionGetter.IsValid(given)).toBeTruthy()
  })

  it('should successfully validate o only query', () => {
    const given = {o: '1'}

    expect(communityOptionGetter.IsValid(given)).toBeTruthy()
  })

  it('should successfully validate empty query', () => {
    const given = {}

    expect(communityOptionGetter.IsValid(given)).toBeTruthy()
  })

  it('should fail validate invalid q type', () => {
    const given = {
      q: ['test']
    }

    expect(communityOptionGetter.IsValid(given)).toBeFalsy()
  })

  it('should fail validate invalid o type', () => {
    const given = {
      q: ['0']
    }

    expect(communityOptionGetter.IsValid(given)).toBeFalsy()
  })

  it('should fail validate invalid o value', () => {
    const given = {
      o: 'notANumber'
    }

    expect(communityOptionGetter.IsValid(given)).toBeFalsy()
  })

  it('should parse query parameters', () => {
    const given = {
      q: 'test',
      o: '1'
    }

    expect(communityOptionGetter.GetQueryOptions(given)).toEqual({
      query: 'test',
      offset: 1
    })
  })
})