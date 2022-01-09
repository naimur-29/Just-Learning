from __future__ import absolute_import, division, print_function, unicode_literals

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from IPython.display import clear_output
from pandas.io.formats.format import DataFrameFormatter

import tensorflow as tf

# Load dataset.
dftrain = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/train.csv') # training data
dfeval = pd.read_csv('https://storage.googleapis.com/tf-datasets/titanic/eval.csv') # testing data
y_train = dftrain.pop('survived')
y_eval = dfeval.pop('survived')

categorical_cols = ['sex', 'n_siblings_spouses', 'parch', 'class', 'deck', 'embark_town', 'alone']
numeric_cols = ['age', 'fare']

feature_cols = []
for feature_name in categorical_cols:
    vocabulary = dftrain[feature_name].unique()
    feature_cols.append(tf.feature_column.categorical_column_with_vocabulary_list(feature_name, vocabulary))

for feature_name in numeric_cols:
    feature_cols.append(tf.feature_column.numeric_column(feature_name, dtype=tf.float32))

print(feature_cols)


# print(dfeval.shape)
# print(dftrain.head())
# print(y_train)
# print(dftrain['age'])
# print(dftrain.loc[0], y_train.loc[0])


# rank1_tensor = tf.Variable(['hello', 'hi', 'excuse me'], tf.string)
# rank2_tensor = tf.Variable([['hello', 'hi', 'excuse me'], ['tensor', 'steve', 'alex']], tf.string)

# print(tf.rank(rank1_tensor))
# print(tf.rank(rank2_tensor))
# print(rank1_tensor.shape)
# print(rank2_tensor.shape)

# rank2_tensor = tf.reshape(rank2_tensor, [3, 2])
# print(rank2_tensor)

# t = tf.ones([5, 5, 5, 5, 5])
# print(t)

# t = tf.zeros([5, 5, 5])
# t = tf.reshape(t, [125])
# t = tf.reshape(t, [25, 5])
# print(t)