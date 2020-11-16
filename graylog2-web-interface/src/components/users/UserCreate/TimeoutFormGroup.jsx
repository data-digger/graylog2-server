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
import * as React from 'react';
import { Field } from 'formik';

import TimeoutInput from 'components/users/TimeoutInput';

const TimeoutFormGroup = () => (
  <Field name="session_timeout_ms">
    {({ field: { name, value, onChange } }) => (
      <TimeoutInput value={value}
                    labelSize={3}
                    controlSize={9}
                    name={name}
                    onChange={(newValue) => onChange({ target: { name, value: newValue } })} />
    )}
  </Field>
);

export default TimeoutFormGroup;
