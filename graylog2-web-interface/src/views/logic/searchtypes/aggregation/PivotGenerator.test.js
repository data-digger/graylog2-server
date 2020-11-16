/*
 * Copyright (C) 2020 Graylog, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Server Side Public License, version 1,
 * as published by MongoDB, Inc.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Server Side Public License for more details.
 *
 * You should have received a copy of the Server Side Public License
 * along with this program. If not, see
 * <http://www.mongodb.com/licensing/server-side-public-license>.
 */
// @flow strict
import FieldType from 'views/logic/fieldtypes/FieldType';
import Pivot from 'views/logic/aggregationbuilder/Pivot';

import PivotGenerator from './PivotGenerator';

describe('PivotGenerator', () => {
  it('generates time pivot for date fields', () => {
    const result = PivotGenerator('foo', new FieldType('date', [], []));

    expect(result).toEqual(new Pivot('foo', 'time', { interval: { type: 'auto' } }));
  });

  it('generates values pivot for other fields', () => {
    const result = PivotGenerator('foo', new FieldType('keyword', [], []));

    expect(result).toEqual(new Pivot('foo', 'values', { limit: 15 }));
  });
});
