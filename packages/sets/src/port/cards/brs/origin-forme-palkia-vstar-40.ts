import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class OriginFormePalkiaVSTAR_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Origin Forme Palkia V";
  public hp: number = 280;
    public height?: number = 5.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Star Portal", powerType: PowerType.ABILITY, text: "During your turn, you may attach up to 3 Water Energy cards from your discard pile to your Water Pokémon in any way you like. (You can't use more than 1 VSTAR Power in a game.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Subspace Swell", cost: [], damage: "60+", text: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "BRS";
  public name: string = "Origin Forme Palkia VSTAR";
  public fullName: string = "Origin Forme Palkia VSTAR BRS 40";
  public text: string = "Origin Forme Palkia VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
