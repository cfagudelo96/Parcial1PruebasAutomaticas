Feature: Subscribe to podcasts

  Scenario: As a user I want to be able to see the subscribe button
    When I swipe left
    Then I should see text containing "Subscriptions"

  Scenario Outline: As a user I want to be able to search for a podcast to subscribe
    When I swipe left
    And I wait for a second
    And I press the "Add podcast" button
    And I wait for a second
    And I enter "<podcastUrl>" into "RSS Feed"
    And I press the enter button
    And I wait for 5 seconds
    Then I should see text containing "Subscribe"

    Examples:
      | podcastUrl |
      | http://www.hellointernet.fm/podcast?format=rss |
      | http://feeds.wnyc.org/radiolab                 |

  Scenario Outline: As a user I want to be able to search and to subscribe to a podcast
    When I swipe left
    And I wait for a second
    And I press the "Add podcast" button
    And I wait for a second
    And I enter "<podcastUrl>" into "RSS Feed"
    And I press the enter button
    And I wait for 5 seconds
    And I press the "Subscribe" button
    And I swipe left
    Then I should see text containing "<podcast>"

    Examples:
      | podcast | podcastUrl |
      | Hello Internet | http://www.hellointernet.fm/podcast?format=rss |
      | Radiolab | http://feeds.wnyc.org/radiolab |

  Scenario Outline: As a user I want to be able to see an episode
    When I swipe left
    And I wait for a second
    And I press the "Add podcast" button
    And I wait for a second
    And I enter "<podcastUrl>" into "RSS Feed"
    And I press the enter button
    And I wait for 5 seconds
    And I press the "Subscribe" button
    And I swipe left
    And I press the "Episodes" button
    And I press the "All" button
    Then I should see text containing "<episode>"

    Examples:
      | episode | podcastUrl |
      | Love Monkey | http://www.hellointernet.fm/podcast?format=rss |
      | Infective Heredity | http://feeds.wnyc.org/radiolab |