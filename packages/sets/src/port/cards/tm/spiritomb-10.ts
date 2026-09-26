import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Spiritomb_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spooky Whirlpool", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may use this power. Your opponent shuffles his or her hand into his or her deck and draws 6 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Color Tag", cost: [], damage: "", text: "Choose Grass Fire Water Lightning Psychic Fighting Darkness Metal or Colorless type. Put 1 damage counter on each Pokémon your opponent has in play of the type you chose." }
  ];
  public set: string = "TM";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb TM 10";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
