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

export class GenesectEX_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Drive Change", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to this Pokémon into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rapid Blaster", cost: [], damage: "100+", text: "Discard as many Metal Energy attached to this Pokémon as you like. This attack does 20 more damage for each Energy card discarded in this way." }
  ];
  public set: string = "FAC";
  public name: string = "Genesect-EX";
  public fullName: string = "Genesect-EX FAC 64";
  public text: string = "Genesect-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
