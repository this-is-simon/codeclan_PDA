require('minitest/autorun')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup

    @card1 = Card.new('diamonds', 5)
    @card2 = Card.new('spades', 1)
    card3 = Card.new('spades', 2)
    card4 = Card.new('spades', 7)

    @cards = [card3, card4]

    @cardgame1 = CardGame.new()

  end

  def test_check_for_ace
    assert_equal(true, @cardgame1.check_for_ace(@card2))

    assert_equal(false, @cardgame1.check_for_ace(@card1))
  end

  def test_highest_card
    assert_equal(@card1, @cardgame1.highest_card(@card2, @card1))
  end

  def test_cards_total
    assert_equal("You have a total of 9.", CardGame.cards_total(@cards))
  end

end
